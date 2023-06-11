import React from "react";
import { Formik } from "formik";

function Formulario() {
    return (
        <Formik initialValues={{
            title:'',
            authors:'',
            genre:'',
            year:''
        }}    
        validate={(valores)=>{
            let errores ={};
            //Validation title
            if(!valores.title){
                errores.title='Please, enter a tittle'
            }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.title)){
                errores.title='the title can only contain letters'
            }
            //validation author
            if(!valores.authors){
                errores.authors='Please, enter a tittle'
            }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.authors)){
                errores.authors='the authors can only contain letters'
            }
            //validation genre
            if(!valores.genre){
                errores.genre='Please, enter a tittle'
            }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.genre)){
                errores.genre='the genre can only contain letters'
            }
            //validation year
            if(!valores.year){
                errores.year='Please, enter a year'
            }else if(isNaN.test(valores.year)){
                errores.year='the genre can only contain numbers'
            }
            
            
            
        }}    
        onSubmit={()=>{
            console.log('formulario enviado')
        }}
        >{({values, errors, handleSubmit, handleChange, handleBlur}) => (

            <div>
                <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-[#85d099]">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="tittle" class="block text-sm font-medium leading-6 text-gray-900">Tittle</label>
                                </div>
                                <div class="mt-2">
                                    <input onChange={handleChange} onBlur={handleBlur} value={values} id="tittle" name="tittle" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></input>
                                </div>
                                {errors.title && <div class="error">{errors.title}</div>}
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="authors" class="block text-sm font-medium leading-6 text-gray-900">Authors</label>
                                </div>
                                <div class="mt-2">
                                    <input onChange={handleChange} onBlur={handleBlur} id="authors" name="authors" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="genre" class="block text-sm font-medium leading-6 text-gray-900">Genre</label>
                                </div>
                                <div class="mt-2">
                                    <input onChange={handleChange} onBlur={handleBlur} id="genre" name="genre" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="year" class="block text-sm font-medium leading-6 text-gray-900">Year of publication</label>
                                </div>
                                <div class="mt-2">
                                    <input onChange={handleChange} onBlur={handleBlur} id="year" name="year" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-[#0a2415] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#85d099]">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}

        </Formik>

    )


}