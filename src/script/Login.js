import Dom from "./Dom";

export default class Login extends Dom {
    constructor(root) {
        super()
        this.root = root
    }

    createModal() {
        const container = this.createElement('div', 'login')
        const form = this.createElement('form')
        const inputLogin = this.createElement('input', 'input', [{
                key: 'placeholder',
                value: 'any login'
            }, {
                key: 'type',
                value: 'login'
            },
            {
                key: 'data-type',
                value: 'login'
            }
        ])
        const inputPassword = this.createElement('input', 'input', [{
            key: 'placeholder',
            value: 'any password'
        }, {
            key: 'type',
            value: 'password'
        },{
            key: 'data-type',
            value: 'password'
        }])
        const btnSubmit = this.createElement('button', 'btn', [{
            'type': 'submit'
        }])

        btnSubmit.textContent = 'sign in'
        form.append(inputLogin, inputPassword, btnSubmit)
        container.append(form)
        this.element = form
        this.container = container
        return container
    }

    render() {
        const modal = this.createModal()
        this.root.append(modal)
    }
}