import React from 'react';
import Logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <div>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img className="mx-auto h-12" src={Logo} alt="" />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>
                                While JSON is probably the most popular format
                                for exchanging data, JSON Schema is the
                                vocabulary that enables JSON data consistency,
                                validity, and interoperability at scale.
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-20 w-20 rounded-full"
                                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/277245798_3162230157367880_6529087593362611774_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V-ahdRXTQiMAX9Oy2G4&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBztWQtRNHb08SQ23kwHazUE7PK2hrTe2aMwCIJxwxA1g&oe=65F7D10D"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">
                                    Khoa Tran
                                </div>
                                <svg
                                    viewBox="0 0 2 2"
                                    width={3}
                                    height={3}
                                    aria-hidden="true"
                                    className="fill-gray-900"
                                >
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-600">
                                    Young passionate developer
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto">
                    <p className="text-center">
                        &copy; 2024 Google Summer of Code
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
