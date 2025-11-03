import { CarIcon } from "../../../assets/icons/car-icon"
import { ComentIcon } from "../../../assets/icons/coment-icon"
import { Headphone } from "../../../assets/icons/headphone"
import { SaveIcon } from "../../../assets/icons/save-icon"
import { Stars5 } from "../../../assets/icons/stars-5"

export const booksFilter = (items) => {
    return items.filter((_, index) => index < 3)
}

export const BookPage = ({
    img, title, genre, desc, star, comment, author, publisher, year, bookPrice, audioPrice, onlineBookPrice
}) => {
    return (
        <div>
            {/* main */}
            <div className="gap-6 flex">
                <img src={img} alt={title} width={'330px'} height={'420px'} style={{ borderRadius: '14px' }} />

                {/* about */}
                <div className="flex flex-col justify-between ">

                    {/* title qatori */}
                    <div>

                        <div className="flex items-center  gap-20">
                            <h2 className="font-bold text-[30px] text-[#11142d]">{title}</h2>
                            <div className="flex gap-4 text-[#9A9A9A]">
                                <Headphone />
                                <SaveIcon />
                            </div>
                            <div className="flex gap-[22px] items-center justify-between">
                                <Stars5 />
                                <p className="font-bold text-2xl">{star}</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-primary_color">
                                    <ComentIcon />
                                </div>
                                <p>{comment} Фикрлар </p>
                            </div>
                        </div>

                    </div>

                    {/* genre */}
                    <h3 className="my-4 text-[14px] text-primary_color">{genre}</h3>

                    {/* description */}
                    <p className="text-[14px] font-normal w-[900px]">
                        {desc}
                    </p>

                    {/* author */}
                    <div className="my-4 flex gap-[70px]">

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]" >Муаллиф</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{author}</p>
                        </div>

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]">Нашриёт</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{publisher}</p>
                        </div>

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]">Йил</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{year}</p>
                        </div>

                    </div>

                    {/* line */}
                    <span className="">
                        <svg width="900" height="2" viewBox="0 0 960 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M957.004 0V0.5H959C959.046 0.5 959.089 0.505685 959.13 0.516602L959.258 0.0341797C959.602 0.125921 959.873 0.396799 959.965 0.741211L959.483 0.870117C959.494 0.91096 959.5 0.954441 959.5 1C959.5 1.04555 959.494 1.08904 959.483 1.12988L959.965 1.25781C959.873 1.60257 959.603 1.87295 959.258 1.96484L959.13 1.4834C959.089 1.49432 959.046 1.5 959 1.5H957.003V2H949.021V1.5H945.028V2H937.045V1.5H933.054V2H925.07V1.5H921.078V2H913.095V1.5H909.104V2H901.12V1.5H897.129V2H889.146V1.5H885.153V2H877.17V1.5H873.179V2H865.195V1.5H861.203V2H853.221V1.5H849.229V2H841.245V1.5H837.254V2H829.271V1.5H825.278V2H817.295V1.5H813.304V2H805.32V1.5H801.329V2H793.346V1.5H789.354V2H781.37V1.5H777.379V2H769.396V1.5H765.403V2H757.421V1.5H753.429V2H745.445V1.5H741.454V2H733.471V1.5H729.479V2H721.495V1.5H717.504V2H709.521V1.5H705.529V2H697.546V1.5H693.554V2H685.57V1.5H681.579V2H673.596V1.5H669.604V2H661.621V1.5H657.629V2H649.646V1.5H645.654V2H637.671V1.5H633.679V2H625.695V1.5H621.704V2H613.721V1.5H609.729V2H601.746V1.5H597.754V2H589.771V1.5H585.779V2H577.796V1.5H573.805V2H565.821V1.5H561.829V2H553.846V1.5H549.854V2H541.871V1.5H537.879V2H529.896V1.5H525.904V2H517.921V1.5H513.93V2H505.946V1.5H501.954V2H493.971V1.5H489.979V2H481.996V1.5H478.004V2H470.021V1.5H466.029V2H458.046V1.5H454.055V2H446.071V1.5H442.079V2H434.096V1.5H430.104V2H422.121V1.5H418.129V2H410.146V1.5H406.154V2H398.171V1.5H394.18V2H386.196V1.5H382.204V2H374.221V1.5H370.229V2H362.246V1.5H358.254V2H350.271V1.5H346.279V2H338.296V1.5H334.305V2H326.321V1.5H322.329V2H314.346V1.5H310.354V2H302.371V1.5H298.379V2H290.396V1.5H286.404V2H278.421V1.5H274.43V2H266.446V1.5H262.454V2H254.471V1.5H250.479V2H242.496V1.5H238.504V2H230.521V1.5H226.529V2H218.546V1.5H214.554V2H206.571V1.5H202.579V2H194.596V1.5H190.604V2H182.621V1.5H178.629V2H170.646V1.5H166.654V2H158.671V1.5H154.679V2H146.696V1.5H142.704V2H134.721V1.5H130.729V2H122.746V1.5H118.754V2H110.771V1.5H106.779V2H98.7959V1.5H94.8037V2H86.8213V1.5H82.8291V2H74.8457V1.5H70.8545V2H62.8711V1.5H58.8789V2H50.8955V1.5H46.9043V2H38.9209V1.5H34.9287V2H26.9463V1.5H22.9541V2H14.9707V1.5H10.9795V2H2.99609V1.5H1C0.723868 1.5 0.5 1.27615 0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H2.99707V0H10.9795V0.5H14.9717V0H22.9551V0.5H26.9463V0H34.9297V0.5H38.9219V0H46.9053V0.5H50.8965V0H58.8799V0.5H62.8711V0H70.8545V0.5H74.8467V0H82.8301V0.5H86.8213V0H94.8047V0.5H98.7969V0H106.779V0.5H110.771V0H118.755V0.5H122.746V0H130.729V0.5H134.722V0H142.705V0.5H146.696V0H154.68V0.5H158.671V0H166.654V0.5H170.646V0H178.63V0.5H182.621V0H190.604V0.5H194.596V0H202.579V0.5H206.571V0H214.555V0.5H218.546V0H226.529V0.5H230.521V0H238.505V0.5H242.496V0H250.479V0.5H254.471V0H262.454V0.5H266.446V0H274.43V0.5H278.421V0H286.404V0.5H290.396V0H298.379V0.5H302.371V0H310.354V0.5H314.346V0H322.329V0.5H326.321V0H334.305V0.5H338.296V0H346.279V0.5H350.271V0H358.254V0.5H362.246V0H370.229V0.5H374.221V0H382.204V0.5H386.195V0H394.179V0.5H398.171V0H406.154V0.5H410.146V0H418.129V0.5H422.121V0H430.104V0.5H434.096V0H442.079V0.5H446.07V0H454.054V0.5H458.046V0H466.029V0.5H470.021V0H478.004V0.5H481.996V0H489.979V0.5H493.971V0H501.954V0.5H505.945V0H513.929V0.5H517.921V0H525.904V0.5H529.896V0H537.879V0.5H541.871V0H549.854V0.5H553.846V0H561.829V0.5H565.82V0H573.804V0.5H577.796V0H585.779V0.5H589.771V0H597.754V0.5H601.746V0H609.729V0.5H613.721V0H621.704V0.5H625.695V0H633.679V0.5H637.671V0H645.654V0.5H649.646V0H657.629V0.5H661.621V0H669.604V0.5H673.596V0H681.579V0.5H685.57V0H693.554V0.5H697.546V0H705.529V0.5H709.521V0H717.504V0.5H721.496V0H729.479V0.5H733.471V0H741.454V0.5H745.445V0H753.429V0.5H757.421V0H765.404V0.5H769.396V0H777.379V0.5H781.371V0H789.354V0.5H793.346V0H801.329V0.5H805.321V0H813.304V0.5H817.296V0H825.279V0.5H829.271V0H837.254V0.5H841.246V0H849.229V0.5H853.221V0H861.204V0.5H865.196V0H873.179V0.5H877.171V0H885.154V0.5H889.146V0H897.129V0.5H901.121V0H909.104V0.5H913.096V0H921.079V0.5H925.071V0H933.054V0.5H937.046V0H945.029V0.5H949.021V0H957.004Z" stroke="#AAAAAA" stroke-dasharray="4 8" />
                        </svg>
                    </span>

                    {/* Buy */}
                    <div className="mt-6 gap-4 flex">

                        {/* Book price */}
                        <a href="#">
                            <div className="bg-primary_color inline-flex py-3 px-4 rounded-[14px] text-white ">
                                <CarIcon />
                                <p className="pl-3">Сотиб олиш - {bookPrice} сум</p>
                            </div>
                        </a>

                        {/* Audio Book */}
                        <a href="#">
                            <div className="bg-white inline-flex py-3 px-4 rounded-[14px] border border-primary_color">
                                <Headphone />
                                <p className="text-black pl-3">Аудио тинглаш - {audioPrice} сум</p>
                            </div>
                        </a>

                        {/* Online book */}
                        <a href="#">
                            <div className="bg-white inline-flex py-3 px-4 rounded-[14px] border border-primary_color">
                                <SaveIcon />
                                <p className="text-black pl-3">Онлайн укиш - {onlineBookPrice} сум</p>
                            </div>
                        </a>

                    </div>


                </div>
            </div>
        </div>
    )
}
