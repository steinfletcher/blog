export default {
    title: 'Enumerated types in Golang',
    tags: ['golang', 'go', 'enum'],
    spoiler: 'Go lacks a powerful enum type like those found in other languages. This post looks at a method to generate a more powerful enum type',
    getContent: () => {
        // @ts-ignore
        return import('./document.mdx')
    },
}
