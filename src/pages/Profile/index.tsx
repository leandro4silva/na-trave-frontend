import { HeaderDashboard } from "../../components/HeaderDashbord"

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

export function Profile(){
    return(
        <main>
            <HeaderDashboard/>
            <section className="md:px-72 px-5 mt-64">
                <div className="flex items-center justify-center gap-8">
                    <button>
                        <MdArrowBackIos size={24} className='text-[#AF053F]'/>
                    </button>
                    <h4 className="font-bold leading-6 text-[#300219]">24 de novembro</h4>
                    <button>
                        <MdArrowForwardIos size={24} className='text-[#AF053F]'/>
                    </button>
                </div>

            </section>
        </main>
    )
}