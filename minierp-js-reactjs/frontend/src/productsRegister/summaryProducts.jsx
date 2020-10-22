import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({quantify, value}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 3' color='blue' icon='money'
                    value={`R$ ${value * quantify}`} text='Valor em estoque' />
            </Row>
        </fieldset>
    </Grid>
)