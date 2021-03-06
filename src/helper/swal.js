import Swal from 'sweetalert2'

const alerting = {
    methods: {
        alertDanger (message) {
            Swal.fire({
                icon: 'error',
                iconHtml: '<i style="font-size: 50px" class="fas fa-exclamation"></i>',
                title: 'Oops...',
                text: message,
            })
        },
        alertQuestion (message) {
            return new Promise((resolve) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: message,
                    icon: 'warning',
                    iconHtml: '<i  style="font-size: 50px" class="fas fa-question"></i>',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sure!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        resolve(true)
                    }
                })
            })
        },
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
                iconHtml: '<i style="font-size: 20px"  class="fas fa-exclamation"></i>',
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
                iconHtml: '<i style="font-size: 20px" class="far fa-thumbs-up"></i>',
                title: `<span class="text-light">${message}</span>`,
            })
        }
    }
}
export default alerting