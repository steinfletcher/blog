export default {
    title: 'Higher order functions and closures - dependency injection in Golang',
    tags: ['golang', 'java', 'dependency injection'],
    spoiler: 'One approach to dependency injection in go (without any magic). Useful if you are coming from Java',
    getContent: () => {
        // @ts-ignore
        return import('./document.mdx')
    },
}
