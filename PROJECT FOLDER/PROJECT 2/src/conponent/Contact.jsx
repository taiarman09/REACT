import React from 'react'

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the details!")
        } else {
            alert('Form submitted!');
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    }

    return (
        <div
            id='contact.index'
            className='w-full h-auto sm:h-[700px] top-[1910px] absolute md:top-[1160px] sm:top-[1545px] flex flex-col justify-start py-5 items-center bg-gray-100 scroll-mt-[100px] px-4 sm:px-0'
        >
            <h1 className='text-3xl font-bold mb-12 relative group cursor-pointer text-center sm:text-left'>
                CONTACT US
                <span className='absolute left-1/2 -bottom-2 w-0 h-[3px] bg-blue-600 transition-all duration-500 group-hover:w-1/2 group-hover:left-1/4'></span>
            </h1>

            <div className='w-full max-w-[400px] sm:w-[400px] h-auto sm:h-[550px] bg-white rounded-xl p-6 sm:p-8 shadow-lg text-black font-sans transition-transform transform hover:scale-105'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-6'>
                    <div>
                        <p className='mb-2 font-semibold'>Name</p>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            placeholder='Eden Johnson'
                            className='w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                        />
                    </div>
                    <div>
                        <p className='mb-2 font-semibold'>Email</p>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='Eden@example.com'
                            className='w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                        />
                    </div>
                    <div>
                        <p className='mb-2 font-semibold'>Message</p>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='Write your message here...'
                            rows={5}
                            className='w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 placeholder-gray-500 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-gray-600'>
                            By submitting, you agree to our <span className='underline cursor-pointer'>Terms</span> and <span className='underline cursor-pointer'>Privacy Policy</span>.
                        </p>
                        <button
                            type='submit'
                            className='mt-2 bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact