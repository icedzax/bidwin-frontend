import { defineStore } from "pinia"

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useAuthStore = defineStore("auth", {
  // a function that returns a fresh state
  state: () => ({
    authentificated: false,
    email: "admin@test.com",
    facebookSession: {}
  }),
  // optional getters
  getters: {
    user: (state) => state
  },
  // optional actions
  actions: {
    login(password: string) {
      // `this` is the store instance
      this.authentificated =
        this.email === "admin@test.com" && password === "1234"
    },
    logout() {
      this.authentificated = false
    },
    signInFaceBook(session: any) {
      this.facebookSession = session
      this.authentificated = !!session
    },
    sigOutFacebook() {
      this.facebookSession = {}
      this.authentificated = false
    }
  }
})
