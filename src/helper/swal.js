import Swal from 'sweetalert2'

const alerting = {
    methods: {
        toastDanger: (message) => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                background: '#bb2124',
                iconColor: '#ffffff',
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: `<span class="text-light">Ooops! ${message}</span>`,
            })
        },
        toastSuccess (message) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                background: '#0d4065',
                iconColor: '#ffffff',
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: `<span class="text-light">${message}</span>`,
            })
        }
    }
}
export default alerting