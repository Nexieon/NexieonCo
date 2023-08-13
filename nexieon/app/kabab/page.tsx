'use client';

import Swal from "sweetalert2";
import removeDefaultLayout from "../components/RemoveDefaultLayout";
import { useEffect } from "react";

const Kabab = () => {
    useEffect(() => {
        removeDefaultLayout();
    }, []);

    const askForKeyFile = async () => {
        const { value: file } = await Swal.fire({
            title: 'Proof?',
            input: 'file',
            inputAttributes: {
                'accept': '.nxkey',
                'aria-label': 'Upload your proof that you agree'
            }
        })
        
        if (file) {
            const reader = new FileReader()

            reader.onload = () => {
                console.log(reader.result)
            }

            reader.readAsText(file);
        }
    }
    
    return (
        <>
            <div>
                {/*<video
                playsInline
                autoPlay
                loop
                muted
                src="./colors1.mp4"
                className="h-[100vh] w-full object-cover"
                />*/}

                <div className="w-full h-[100vh] bg-black bg-opacity-50 flex justify-center items-center">
                <div className={"text-center"}>
                    <div
                        className={
                            "text-6xl md:text-7xl lg:text-8xl font-bold p-6 fadeInAnim"
                        }
                    >
                        <h2>Kabab tastes very good</h2>
                    </div>

                    <div className="fadeInAnim mt-14 gap-6 flex justify-center">
                        <button className="w-full lg:w-auto px-8 py-5 btn-main mt-12" onClick={askForKeyFile}>Agreed.</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Kabab;
