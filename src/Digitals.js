import React, {Fragment, Consumer} from 'react'
import MyContext from './MyContext'
const Digitals = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Digitals:</h4>
                {context.digitals.map((item,index) => (
                    <Digital
                        key={index}
                        name={item.name}
                        price={item.price}
                        removeItem={() => context.removeDigitalItem(item.id)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

const Digital = props => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.removeItem}>remove item</button>
    </Fragment>
);

export default Digitals;