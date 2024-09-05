import { JSX } from 'react' 
import { highlight } from 'sugar-high' 
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Counter from '@/components/counter'
    
export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps
){
    return(
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {}) }}
        />
    )}
    