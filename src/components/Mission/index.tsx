import React, { useState, useEffect } from "react";
import get from "lodash.get"
import Icon from "../svgs/loader"
import "./mission.css";


interface IMission {
    mission_id: string,
    mission_name: string,
    launch_year: string;
    launch_success: boolean;
    flight_number: string;
    links: {
        mission_patch: string
    }
    rocket: {
        first_stage: {
            cores: any
        }
    }
}
interface IfilterOptions {
    heading: string,
    urlKey: string,
    index: number
}

const missionId = 'Mission IDs';
const launchYear = 'Launch Year';
const launchSuccess = 'Launch Success';
const landSuccess = 'Land Success';

export const Mission = () => {

    const [missionData, handleMissionData] = useState([])
    const [active, handleActive] = useState(-1);
    const [activePanel, HandlePanel] = useState(-1);

    const getSpaceData = async (url: string) => {
        let response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&${url}`);
        let data = await response.json()
        return handleMissionData(data);
    }

    useEffect(() => {
        getSpaceData('').then(data => data);
    }, []);

    const filterData = (e: any, type: string, index: number) => {
        handleActive(index);
        const getValue = `${type}${e.target.value}`;
        getSpaceData(getValue).then(data => data);
    }





    const FilterOptions = ({ heading, urlKey, index }: IfilterOptions) => {
        return <div onClick={() => HandlePanel(index)}>
            <h5 className="filter-heading">{heading}</h5>
            <div className="input-wrapper">
                <input onClick={e => filterData(e, urlKey, -2)} value="true" className={active === -2 && activePanel === index ? "active" : ""} />
                <input onClick={e => filterData(e, urlKey, -3)} value="false" className={active === -3 && activePanel === index ? "active" : ""} />
            </div>
        </div>
    }


    const FilterYearData = () => {
        const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", '2019', '2020']
        return <>
            <h5 className="filter-heading" >Launch Year</h5>
            <div className="input-wrapper">{years.map((year: string, index: number) => (
                <input key={index} onClick={e => filterData(e, "launch_year=", index)} value={year} className={active === index ? "active" : ""} />

            ))}</div>
        </>
    }

    const SideBar = () => (
        <article>
            <div className="filter-headline">Filters</div>
            <FilterYearData />
            <FilterOptions urlKey={'&launch_success='} index={1} heading='Successful Launch' />
            <FilterOptions urlKey={`&land_success=`} index={2} heading='Successful Land' />
        </article>
    )

    return (

        <div className="wrapper-grid">
            <header>SpaceX Program</header>
            <SideBar />
            {missionData.length > 0 ? <div className="mission">{missionData.map((mission: IMission, index: number) => {


                const coresData = get(mission, ['rocket', 'first_stage', 'cores'], [])

                const landSuccess = coresData.map((cores: { land_success: boolean; }) => cores.land_success);

                const isLaunchSuccess = mission['launch_success'] === true ? 'True' : mission['launch_success'] === false ? 'False' : 'Not specified';
                const isLandSuccess = landSuccess[0] === true ? 'True' : landSuccess[0] === false ? 'False' : 'not sure';
                const imageUrl = get(mission, ['links', 'mission_patch'], "")

                return <div key={index} className="card-details">
                    <img className="image space" src={imageUrl} width="100" height="100" />
                    <div className="space" >{mission['mission_name']}  {mission['flight_number']}</div>
                    <span className="space"  >{missionId}: {mission['mission_id']}</span>
                    <div className="space" >{launchYear}: {mission['launch_year']}</div>
                    <div className="space" >{launchSuccess}: {isLaunchSuccess}</div>
                    <div className="space" >{landSuccess}: {isLandSuccess}</div>
                </div >
            })} </div>
                : <Icon />}
            <footer>Developed by Shreya Shukla</footer>
        </div>

    )

}
