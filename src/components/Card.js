import React from 'react'
import "../css/Card.css"
import img1 from "../images/axie-full.png"
import img2 from "../images/axie-eye-close.png"
const Card = () => {
    return (
        <div className="flex items-center justify-center my-20">
            <div className="m-8">
                <div className="axie-card">
                    <div className=" border-gray-3 bg-gray-4 rounded transition hover:shadow hover:border-gray-6">
                        <div className="px-12 py-16">
                            <div className="flex leading-16 items-center justify-between">
                                <div className="flex">
                                    <div style={{ maxWidth: "80px" }}>
                                        <span className="flex px-8 rounded text-12  border-transparent" style={{ paddingTop: "1px", paddingBottom: "1px", backgroundColor: "#ffb812", borderColor: "transparent" }}>
                                            <span className="truncate">#2592</span>
                                        </span>
                                    </div>
                                    <div className="ml-4 uppercase truncate" style={{ maxWidth: "100px" }}>
                                        <span className="flex px-8 rounded text-12 border-transparent" style={{ paddingTop: "1px", paddingBottom: "1px", backgroundColor: " rgb(141, 95, 255)", borderColor: "transparent" }}>
                                            <span className="text-4 truncate uppercase">
                                                2 Mystic
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 mb-4 flex flex-row">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: "#ffb812" }}><path d="M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82M12.713 2.635a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973"></path></svg>
                                </div>
                                <small className="truncate ml-4 color-white">Axie #2592</small>
                            </div>
                            <small className="block text-gray-2 truncate">Breed count: 0</small>
                            <div className="flex justify-center items-center img-placeholder">
                                <img src={img1} alt="2592" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-8">
                <div className="axie-card">
                    <div className=" border-gray-3 bg-gray-4 rounded transition hover:shadow hover:border-gray-6">
                        <div className="px-12 py-16">
                            <div className="flex leading-16 items-center justify-between">
                                <div className="flex">
                                    <div style={{ maxWidth: "80px" }}>
                                        <span className="flex px-8 rounded text-12 border-transparent" style={{ paddingTop: "1px", paddingBottom: "1px", backgroundColor: "#ff5341", borderColor: "transparent" }}>
                                            <span className="truncate">#1289</span>
                                        </span>
                                    </div>
                                    <div className="ml-4 uppercase truncate" style={{ maxWidth: "100px" }}>
                                        <span className="flex px-8 rounded text-12 border-transparent" style={{ paddingTop: "1px", paddingBottom: "1px", backgroundColor: " rgb(141, 95, 255)", borderColor: "transparent" }}>
                                            <span className="text-4 truncate uppercase">
                                                1 Mystic
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 mb-4 flex flex-row">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: "#ff5341" }}><path d="M13.264 3.198c-1.565.33-3.077.994-4.084 2.216A6.19 6.19 0 008 7.704a6.19 6.19 0 00-1.18-2.29C5.813 4.192 4.301 3.527 2.736 3.198c-.357-.075-.75-.181-1.116-.197-.72-.031-.612.948-.616 1.439-.006.666.103 1.328.249 1.979.171.764.311 1.571.851 2.193.356.41.846.692 1.321.972.083.048.169.1.213.183.05.095.033.208.016.313l-.383 2.245c-.029.168-.048.366.081.484a.53.53 0 00.239.105c1.534.367 3.211-.478 4.01-1.774.176-.286.305-.585.399-.893.094.308.223.607.399.893.799 1.296 2.476 2.141 4.01 1.774a.529.529 0 00.238-.105c.13-.118.11-.316.082-.484l-.383-2.245c-.018-.105-.034-.218.016-.313.044-.082.13-.135.212-.183.476-.28.966-.561 1.322-.972.54-.622.68-1.43.851-2.193.146-.65.255-1.313.25-1.98-.005-.49.104-1.47-.617-1.438-.366.016-.759.122-1.116.197z"></path></svg>
                                </div>
                                <small className="truncate ml-4 color-white">Axie #1289</small>
                            </div>
                            <small className="block text-gray-2 truncate">Breed count: 0</small>
                            <div className="flex justify-center items-center img-placeholder">
                                <img src={img2} alt="2592" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
