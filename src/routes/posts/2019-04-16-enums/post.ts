export default {
    title: 'Enumerated types in Golang',
    tags: ['golang', 'go', 'enum', 'ast', 'go generate'],
    spoiler: 'In this post we look at generating a powerful enumerated type using `go generate` and abstract syntax tree traversal.',
    getContent: () => {
        // @ts-ignore
        return import('./document.mdx')
    },
}
