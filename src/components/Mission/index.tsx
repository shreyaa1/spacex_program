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
}
export const Mission = () => {

    const [missionData, handleMissionData] = useState([])
    const [active, handleActive] = useState(-1);

    const getSpaceData = async (url: string) => {
        let response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&${url}`);
        let data = await response.json()
        return handleMissionData(data);
    }

    useEffect(() => {
        getSpaceData('').then(data => data);
    }, []);


    const filterData = (e: any, type: string, index: number) => {
        handleActive(index)
        const getValue = `${type}${e.target.value}`
        getSpaceData(getValue).then(data => data);
    }



    const FilterLaunchData = () => {
        return <>
            <h5 className="filter-heading">Successful Launch</h5>
            <div className="year-name">
                <input onClick={e => filterData(e, "&launch_success=", -2)} value="true" className={active === -2 ? "active" : ""} />
                <input onClick={e => filterData(e, "&launch_success=", -3)} value="false" className={active === -3 ? "active" : ""} />
            </div>
        </>
    }

    const FilterYearData = () => {
        const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", '2019', '2020']
        return <>
            <h5 className="filter-heading" >Launch Year</h5>
            <div className="year-name">{years.map((year: string, index: number) => (
                <input key={index} onClick={e => filterData(e, "launch_year=", index)} value={year} className={active === index ? "active" : ""}  />

            ))}</div>
        </>
    }

    const SideBar = () => (
        <article>
            <div className="filter-headline">Filters</div>
            <FilterYearData />
            <FilterLaunchData />
        </article>
    )

    return (

        <div className="wrapper-grid">
            <header>SpaceX Program</header>
            <SideBar />
            {missionData.length > 0 ? <div className="mission">{missionData.map((mission: IMission, index: number) => {
                // land success needs to be done
                const landSuccess = Object.values(mission).map((missionInfo: any) => missionInfo);

                const imageUrl = get(mission, ['links', 'mission_patch'], "")

                return <div key={index} className="card-details">
                    <img className="image space" src={imageUrl} width="100" height="100" />
                    <div className="space" >{mission['mission_name']}  {mission['flight_number']}</div>
                    <span className="space"  >Mission IDs: {mission['mission_id']}</span>
                    <div className="space" >Launch Year: {mission['launch_year']}</div>
                    <div className="space" >Launch Success: {mission['launch_success'] === true ? 'True' : 'False'}</div>
                </div >
            })} </div>
                : <Icon />}
            <footer>Developed by Shreya Shukla</footer>
        </div>


    )

}
