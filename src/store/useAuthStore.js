import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApiLogin } from "../services/api-login";


export const UseAuthStore = create(
    persist((set) =>({
        username: null,
        authenticated: false,
        token: null,

        login: async (username, password) => {
            try{
                const DataUser = await ApiLogin(username,password);

                set({
                    username:{
                        id: DataUser.id,
                        username: DataUser.username,
                        email: DataUser.email,
                        image: DataUser.image
                    },

                    token: DataUser.accessToken,
                    authenticated: true
                });

                return true;

            } catch(error){
                alert("Incorrect username or password");
                return false;
            }
        },

        logout: () =>{
            set({
                username: null,
                token: null,
                authenticated: false
            });
        }
    }),
    {
      name: "auth-storage"
    }
    )
)