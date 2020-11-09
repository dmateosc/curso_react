import React, { PureComponent } from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'
import '@testing-library/jest-dom/extend-expect'

test('CityInfo render', async () => {
    

    //AAA
    //Arrange
    //Act
    const city = "Moraleja"
    const country ="España"
    //Render: reneriza el componente y retorna una serie e funcioens
    // de utilidad

    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)


    //Assert
    //findAllByRole todos los componentes que sean heading
    //"heading" => H1,H2,H3
    const cityAndCountryComponent = await findAllByRole("heading")

    //¿Cuando el test va a ser correcto?
    //Definición
    //Cuando el primer elemento es "Moraleja"
    //Cuando el segundo elemento es "España"

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)


})