import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./Menu/MenuSlice";
import SliderSlice from "./Slider/SliderSlice";
import TakhfifSlice from "./Takhfif/TakhfifSlice";
import CategorySlice from "./Category/CategorySlice";
import NowSlice from "./Now/NowSlice";
import BestsellSlice from "./Bestsell/BestsellSlice";
import PopularSlice from "./Popular/PopularSlice";
import ArticleSlice from "./Article/ArticleSlice";
const store = configureStore({
  reducer: {
    menu: MenuSlice,
    slider: SliderSlice,
    takhfif: TakhfifSlice,
    category: CategorySlice,
    now: NowSlice,
    bestsell: BestsellSlice,
    popular: PopularSlice,
    article: ArticleSlice,
  },
});
export default store;
