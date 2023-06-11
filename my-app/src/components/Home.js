import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div class="relative isolate px-6 pt-14 lg:px-8">

            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">What book are you looking for?</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Bookie has everything you need</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/books" class="p-4 rounded-md bg-[#0a2415] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#85d099] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f2dd]">Get started

                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;