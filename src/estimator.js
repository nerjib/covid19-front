import React from 'react'
import covid19ImpactEstimator  from './estimatorCal'

export default class Estimator extends React.Component{
constructor(props){
    super(props)
    this.state = {
        population: '',
        timeToElapse: '',
        reportedCases: '',
        totalHospitalBeds: '',
        periodType: '',
        impactResult: {},
        severeImpactResult: ''

    }
}
 estimate=()=>{
      const data = {
        region: {
            name: 'Africa',
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
          },
          periodType: this.state.periodType,
          timeToElapse: this.state.timeToElapse,
          reportedCases: this.state.reportedCases,
          population: this.state.population,
          totalHospitalBeds: this.state.totalHospitalBeds
      }
   // var impact ;
    var {impact, severeImpact} = covid19ImpactEstimator(data)
      this.setState ({
          impactResult:  impact,
          severeImpactResult: severeImpact
      })
 }

 handleChange = (e) => {
    const { value, name } = e.target;
    e.preventDefault()
     this.setState({
       [name]: value
    });
 }
render (){
    return (
        <div>
            <div className='col-md-4' style={{backgroundColor:'#0ab3c4'}}>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <th colSpan='2'>
                                <label className='text-left'>    Data Collection</label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >
                            <label className='text-left'> Population </label>
                            </td>
                            <td>
                                <input className='form-control' value={this.state.population} data-population='population' onChange={this.handleChange} name='population' type='text' placeholder='Population'/>    
                            </td>
                        </tr>
                        <tr>
                            <td style={{alignItems:'left'}}>
                            <label className='text-left'>   Time to Elapse </label>
                            </td>
                            <td>
                                <input type='text' className='form-control' value={this.state.timeToElapse} data-time-to-elapse='timeToElapse' onChange={this.handleChange} name='timeToElapse' placeholder='Time to Elapse'/>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label className='text-left'>   Reported Case </label>
                            </td>
                            <td>
                                <input type='text' className='form-control' value={this.state.reportedCases} data-reported-cases='reportedCases' onChange={this.handleChange} name='reportedCases' placeholder='Reported Cases'/>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label className='text-left'>   Total Hospital </label>
                            </td>
                            <td>
                                <input type='text' className='form-control' value={this.state.totalHospitalBeds} data-total-hospital-beds='totalHospitalBeds' onChange={this.handleChange} name='totalHospitalBeds' placeholder='Total Hospital Beds'/>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label className='text-left'>  Period Type </label>
                            </td>
                            <td>
                                <select className='form-control'   data-period-type='periodType' name='periodType' onChange={this.handleChange}>
                                    <option >Period Type</option>
                                    <option value='days'>Days</option>
                                    <option value='weeks'>Weeks</option>
                                    <option value ='months'>Months</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan='2'  style={{alignItems:'center', marginLeft:50}}>
                            <button class='btn btn-default btn-primary' data-goestimate='estimate'  onClick={this.estimate}>Estimate</button>

                            </td>
                        </tr>
                   </tbody>
                </table>
            </div>
                <div>
                    <table className='table' style={{alignItems:'left'}}>
                        <thead>
                            <tr>
                            <th>Estimation Output</th>
                            <th>Impact</th>
                            <th>Severe Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <label className='text-left'> Currently Infected </label>
                                </td>
                                <td>
                                    {this.state.impactResult.currentlyInfected}
                                    
                                </td>
                                <td>
                                {this.state.severeImpactResult.currentlyInfected}

                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'>   Infections At </label>
                                </td>
                                <td>
                                {this.state.impactResult.infectionsByRequestedTime}

                                </td>
                                <td>
                                    {this.state.severeImpactResult.infectionsByRequestedTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'>   Severe Cases </label>
                                </td>
                                <td>
                                    {this.state.impactResult.severeCasesByRequestedTime}
                                </td>
                                <td>
                                    {this.state.severeImpactResult.severeCasesByRequestedTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'>   Hospital Beds </label>
                                </td>
                                <td>
                                    {this.state.impactResult.hospitalBedsByRequestedTime}
                                </td>
                                <td>
                                    {this.state.severeImpactResult.hospitalBedsByRequestedTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'> Cases For ICU </label>
                                </td>
                                <td>
                                    {this.state.impactResult.casesForICUByRequestedTime}
                                </td>
                                <td>
                                    {this.state.severeImpactResult.casesForICUByRequestedTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'> Cases For Ventilators </label>
                                </td>
                                <td>
                                    {this.state.impactResult.casesForVentilatorsByRequestedTime}
                                </td>
                                <td>
                                    {this.state.severeImpactResult.casesForVentilatorsByRequestedTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label className='text-left'> Dollars In Flight </label>
                                </td>
                                <td>
                                    {this.state.impactResult.dollarsInFlight}
                                </td>
                                <td>
                                    {this.state.severeImpactResult.dollarsInFlight}
                                </td>
                            </tr>
                        </tbody>
                    </table>

               </div>
        </div>
    )
}

}