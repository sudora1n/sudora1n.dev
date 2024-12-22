export type ToastType = "alert-success" | "alert-error" | "alert-info" | "alert-warning"

export interface Toast {
    id: number
    message: string;
    type: ToastType
}

export const useToastsStore = defineStore("toasts", {
    state: () => {
        return {
            toasts: [] as Toast[],
            nextId: 1,
        }
    },
    actions: {
        addToast(message: string, type: ToastType = "alert-info", duration: number = 1500) {
            const id = this.nextId++
            this.toasts.push({ id, message, type })

            setTimeout(() => {
                this.removeToast(id)
            }, duration)
        },

        removeToast(id: number) {
            this.toasts = this.toasts.filter(toast => toast.id !== id)
        }
    }
})