import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const rootDirectory= path.join(process.cwd(), 'content','posts')

export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    title? :string
    summary?: string
    image? :string
    author?: string
    publishedAt? :string
    slug: string
}

export async function getPostBySlug(slug:string): Promise<Post | null> {  //return post or null whether or not the slug exists
    try{
        const filePath= path.join(rootDirectory, `${slug}.mdx`) //get the file path
        const fileContents= fs.readFileSync(filePath, {encoding:'utf-8'})  //read the content of the file

        const {data, content} = matter(fileContents)

    return {metadata: {...data, slug}, content}  //add slug to data because it wasn't in the front matter
    } catch(error){
        return null
    }
}