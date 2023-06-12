import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";

function Formulario() {
    const [formSend, changeFormSend] = useState(false)
    return (
        <Formik initialValues={{
            title: '',
            authors: '',
            genre: '',
            year: ''
        }}
            validate={(valores) => {
                let errores = {};
                //Validation title
                if (!valores.title) {
                    errores.title = 'Please, enter a tittle'
                } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.title)) {
                    errores.title = 'the title can only contain letters'
                }
                //validation author
                if (!valores.authors) {
                    errores.authors = 'Please, enter a tittle'
                } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.authors)) {
                    errores.authors = 'the authors can only contain letters'
                }
                //validation genre
                if (!valores.genre) {
                    errores.genre = 'Please, enter a tittle'
                } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/.test(valores.genre)) {
                    errores.genre = 'the genre can only contain letters'
                }
                //validation year
                if (!valores.year) {
                    errores.year = 'Please, enter a year'
                } else if (!/^[0-9]+$/.test(valores.year)) {
                    errores.year = 'the genre can only contain numbers'
                }
                return errores;


            }}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                changeFormSend(true);
                setTimeout(() => changeFormSend(false), 3000)
            }}
        >{({ values, touched, errors, handleSubmit, handleChange, handleBlur }) => (
            <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-[#85d099]">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add a title</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <div class="flex items-center justify-between">
                                <label htmlFor="title" class="block font-medium leading-6 text-gray-900">Title</label>
                            </div>
                            <div class="mt-2">
                                <Field id="title" name="title" type="text" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></Field>
                            </div>
                            <ErrorMessage name="name" component={()=>(<div class="error text-sm text-[#d50000]">{errors.name}</div>)}></ErrorMessage>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label htmlFor="authors" class="block font-medium leading-6 text-gray-900">Authors</label>
                            </div>
                            <div class="mt-2">
                                <Field id="authors" name="authors" type="text" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></Field>
                            </div>
                            <ErrorMessage name="authors" component={()=>(<div class="error text-sm text-[#d50000]">{errors.authors}</div>)}></ErrorMessage>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label htmlFor="genre" class="block  font-medium leading-6 text-gray-900">Genre</label>
                            </div>
                            <div class="mt-2">
                                <Field id="genre" name="genre" type="text" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></Field>
                            </div>
                            <ErrorMessage name="genre" component={()=>(<div class="error text-sm text-[#d50000]">{errors.genre}</div>)}></ErrorMessage>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label htmlFor="year" class="block font-medium leading-6 text-gray-900">Year of publication</label>
                            </div>
                            <div class="mt-2">
                                <Field id="year" name="year" type="text" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#85d099] sm:text-sm sm:leading-6"></Field>
                            </div>
                            <ErrorMessage name="year" component={()=>(<div class="error text-sm text-[#d50000]">{errors.year}</div>)}></ErrorMessage>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-[#0a2415] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#85d099]">Submit</button>
                        </div>
                        {formSend && <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-[#49c440]">Form submitted!</h2>
                        </div>}
                    </form>
                </div>
            </div>
        )}

        </Formik>

    )


}
export default Formulario;