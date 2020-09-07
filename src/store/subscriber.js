import store from '@/store'
import axion from 'axios'
store.subscribe((mutation)=>{
    switch (mutation.type){
        case 'auth/SET_TOKEN':
            if(mutation.payload){
                axion.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
            }

            break
    }
})