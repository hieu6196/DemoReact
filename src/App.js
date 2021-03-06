import logo from './logo.svg';
import './App.css';
import BaiTapLayout from './BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingClassComponent from './DataBinding/DataBindingClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderDanhSachPhim from './RenderWithMap/BaiTapRenderDanhSachPhim';
import DemoProps from './Props/DemoProps';
import ProductListRCC from './Props/ProductListRCC';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderDanhSachPhim/> */}
      {/* <DemoProps/> */}
      <ProductListRCC/>
    </div>
  );
}

export default App;
