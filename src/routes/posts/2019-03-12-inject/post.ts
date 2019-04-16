export default {
    title: 'Dependency injection in Golang using higher order functions',
    tags: ['golang', 'go', 'java', 'dependency injection'],
    spoiler: 'In this post we explore an approach to dependency injection in go (without any magic or frameworks)',
    getContent: () => {
        // @ts-ignore
        return import('./document.mdx')
    },
}
