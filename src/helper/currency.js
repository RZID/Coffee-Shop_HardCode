const currency = {
    methods: {
        toRupiah (number) {
            if (typeof (number) !== 'number') {
                number = parseInt(number)
            }
            return number.toLocaleString('id-ID')
        }
    }
}
export default currency