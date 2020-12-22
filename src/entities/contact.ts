export default class Contact {
    ID: string | undefined
    Name: string | undefined

    async Save(){
        try {
            const apiMock = () => {
                new Promise(resolve => {
                    setTimeout(resolve,2000)
                })
            }
            await apiMock()
            return this
        } catch (error) {
            console.error(`Unable to save contact.`)
        }

    }
}