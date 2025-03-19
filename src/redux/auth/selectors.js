export const selectAuthUser = (state)=> state.auth.user
export const selectAuthToken = (state)=> state.auth.token
export const selectAuthError = (state)=> state.auth.error
export const selectAuthIsLoggedIn = (state)=> state.auth.isLoggedIn
export const selectAuthRefreshing = (state)=> state.auth.isRefreshing