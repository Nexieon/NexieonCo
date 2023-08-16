'use client';

import Swal from "sweetalert2";
import removeDefaultLayout from "../../components/RemoveDefaultLayout";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Kabab = () => {
    const router = useRouter();

    useEffect(() => {
        if (window) {
            if (sessionStorage.getItem('admin') === null) {
                router.back();
            }

            console.clear();
        }
    }, []);
    
    return (
        <>
            <div>
                <div className="w-full h-[100vh] bg-black bg-opacity-50 flex justify-center items-center">
                    <div className={"text-center"}>
                        <div
                            className={
                                "text-6xl md:text-7xl lg:text-8xl font-bold p-6 fadeInAnim"
                            }
                        >
                            <h2>Dashboard</h2>
                        </div>
                        <div className="fadeInAnim mt-14 gap-6 flex justify-center">
                            <button className="w-full lg:w-auto px-8 py-5 btn-main mt-12" onClick={() => {
                                sessionStorage.removeItem('admin');
                                router.back();
                            }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kabab;
