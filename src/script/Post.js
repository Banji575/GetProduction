import Dom from "./Dom"

export default class List extends Dom {
    constructor(root, headerText, text, id) {
        super()
        this.root = root
        this.headerText = headerText
        this.text = text
        this.id = id
    }

    getId() {
        return this.id
    }

    createList() {
        const container = this.createElement('div', 'list-container', [{
            key: 'data-id',
            value: this.id
        }])
        const header = this.createElement('h2')
        const paragraph = this.createElement('p')
        header.textContent = this.headerText
        paragraph.textContent = this.text
        container.append(header, paragraph)
        this.el = container
        return container
    }

    render() {
        const item = this.createList()
        this.root.append(item)
    }
}