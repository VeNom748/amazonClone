import React, { useState } from 'react'
import { Product } from './Product';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


export const Product_row_first = () => {

    const [ProductRow1, setProductRow1] = useState({
        left: 0,
    })

    let Larr, Rarr;

    // for product row 1 
    if (ProductRow1.left === 0 ) {
        Larr = {
            display:"none"
        }
    } else if (ProductRow1.left >= -840) {
        Rarr = {
            display:"none"
        }
    }

    return (
        <div className="Products_row" >
            <h1>Handpicked laptops for multi-tasking</h1>

            <div className="leftArr arrow" style={Larr} onClick={() => {
                setProductRow1({ ...ProductRow1, left: ProductRow1.left + 840 })
            }} >
                <ArrowLeftIcon className="Larr"  />
            </div>
            <div className="rightArr arrow" style={Rarr} onClick={() => {
                setProductRow1({ ...ProductRow1, left: ProductRow1.left - 840 })
            } }>
                <ArrowRightIcon className="Rarr"   />
            </div>

            <div className="Products_box" style={ProductRow1} >
                <Product
                    id="01"
                    name="HP Pavilion Gaming 10th Gen Intel Core i5 Proce…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/41vkWkERzhL._AC_SX184_.jpg"
                    price={78070}
                    brand="HP"
                    subprice="92,753.00"
                    star={1}
                />
                
                <Product
                    id="02"
                    name="INTEL NUC Mini PC Desktop CPU - NUC8i3…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/31feqxrzJFL._AC_SX184_.jpg"
                    price={22603}
                    brand="Intel"
                    subprice="32,000.00"
                    star={4}
                />
                
                <Product
                    id="03"
                    name="Dell XPS 7390 13.3-inch (33.78 cms) UHD Displ…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/41-Zsy0JmXL._AC_SX184_.jpg"
                    price={164990}
                    brand="Dell"
                    subprice="1,73,285.00"
                    star={3}
                />
                <Product
                    id="04"
                    name="Lenovo Yoga Slim 7 10th Gen Intel Core i5 14…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/41TvI1T+UPL._AC_SX184_.jpg"
                    price={71990}
                    brand="Lenovo"
                    subprice="89,990.00"
                    star={2}
                />
                <Product
                    id="05"
                    name="ASUS Expertbook P4 (P4103FA)-14 inch Not…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/41jJOGDStyL._AC_SX184_.jpg"
                    price={59990}
                    brand="ASUS"
                    subprice="81,990.00"
                    star={5}
                />
                <Product
                    id="06"
                    name="DELL XPS 9300 13.3-inch (33.78 cms) FHD L…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/51oyNTseOaL._AC_SX184_.jpg"
                    price={117657}
                    brand="Dell"
                    subprice="1,21,999"
                    star={4}
                />
                <Product
                    id="07"
                    name="HP 340S G7 Commercial Laptop (10th Gen Core…"
                    img="https://images-eu.ssl-images-amazon.com/images/I/416aGv0pzaL._AC_SX184_.jpg"
                    price={78754}
                    brand="HP"
                    subprice="78,755.00"
                    star={3}
                />
                <Product
                    id="08"
                    name="Dell Inspiron 7490 14-inch FHD Display Laptop (10th..."
                    img="https://images-eu.ssl-images-amazon.com/images/I/41EcbF4YQbL._AC_SX184_.jpg"
                    price={69994}
                    brand="Dell"
                    subprice="99,433.00"
                    star={4}
                />
                <Product
                    id="10"
                    name="Dell XPS 9570 15.6 UHD Laptop (8th Gen... "
                    img="https://images-eu.ssl-images-amazon.com/images/I/41XpZFCMkKL._AC_SX184_.jpg"
                    price={24990}
                    brand="Dell"
                    subprice="2,79,553.00"
                    star={5}
                />
                <Product
                    id="09"
                    name="Dell XPS 7390 13.3-inch (33.78 cms) FHD Thin ..."
                    img="https://images-eu.ssl-images-amazon.com/images/I/41O6NEkq1eL._AC_SX184_.jpg"
                    price={103499}
                    brand="HP"
                    subprice="1,20,957.00"
                    star={5}
                />
                <Product
                    id="10"
                    name="ASUS VivoBook 15 Intel Core i5-1035G1 10th Gen 15.6 ... "
                    img="https://images-eu.ssl-images-amazon.com/images/I/419MqI3z2DL._AC_SX184_.jpg"
                    price={78754}
                    brand="ASUS"
                    subprice="78,755.00"
                    star={5}
                />
            </div>
        </div>
    )
}
