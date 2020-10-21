/* eslint-disable react/prop-types */
import React, {PureComponent} from 'react';
import map from 'lodash/map'

class Countries extends PureComponent {
    componentDidMount() {
        this.props.fetchCountries();
    }

    render() {
        const {countries} = this.props;
        if(this.props.countries){
            console.log(countries);
        }
        

        return (
            <div>
                <h3> Países</h3>
                <hr/>
                {map(countries, country => (
                    <div>
                        Código: &nbsp;
                        {country.code}
                        <br/>
                        Nombre: &nbsp;
                        {country.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Countries;
