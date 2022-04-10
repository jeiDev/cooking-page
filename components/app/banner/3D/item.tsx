import Timer from "~/components/svg/icons/timer.svg";
import ForkKnife from "~/components/svg/icons/fork-knife.svg";

const ItemBanner3D = () => {

    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <span>Hot Recipes</span>
                    </div>
                </div>
                <div>
                    <h2>Spicy delicious chicken wings</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div>
                        <div>
                            <Timer />
                            <span>30 Minutes</span>
                        </div>
                        <div>
                            <ForkKnife />
                            <span>Chicken</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h4>John Smith</h4>
                            <span>15 March 2022</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>View Recipes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ItemBanner3D;