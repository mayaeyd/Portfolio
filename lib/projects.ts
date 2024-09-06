import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const rootDirectory= path.join(process.cwd(), 'content','projects')  //projects folder inside content

export type Project = {
    metadata: ProjectMetadata
    content: string
}

export type ProjectMetadata = {
    title? :string
    summary?: string
    image? :string
    author?: string
    publishedAt? :string
    slug: string
}

export async function getProjectBySlug(slug:string): Promise<Project | null> {  //return project or null whether or not the slug exists
    try{
        const filePath= path.join(rootDirectory, `${slug}.mdx`) //get the file path
        const fileContents= fs.readFileSync(filePath, {encoding:'utf-8'})  //read the content of the file

        const {data, content} = matter(fileContents)

    return {metadata: {...data, slug}, content}  //add slug to data because it wasn't in the front matter
    } catch(error){
        return null
    }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
    const files = fs.readdirSync(rootDirectory)
    const projects = files
        .map(file => getProjectMetadata(file))  //get the metadata of each file
        .sort((a, b) => {  //sort the projects according to published date
            if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
                return 1
            } else {
                return -1
            }
        })
    if (limit) {  //if a limit for num of projects was passed
        return projects.slice(0, limit)
    }
    
    return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
    const slug = filepath.replace(/\.mdx$/, '')  //get the file
    const filePath= path.join(rootDirectory, filepath)  //create the slug
    const fileContent= fs.readFileSync(filePath, {encoding: 'utf8'}) //read the content of the file
    const {data} =matter(fileContent) //extract the front matter
    return {...data,slug} //return the metadata
}