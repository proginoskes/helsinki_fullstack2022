
var total = 0;
var avg = 0;
var pct_pos = 0;

function Total (counts) {
    total = counts.reduce((partial_sum, v)=>partial_sum+v);
    return total;
}

function Average (scores) {
    avg = scores.reduce((partial_sum, v)=>partial_sum+v)/total || 0;
    return avg;
}

function PctPos (count_positive) {
    pct_pos = count_positive.reduce((partial_sum, v)=>partial_sum+v)/total || 0;
    return pct_pos*100;
}

const StatisticsLine = (props) => {
    console.log(props);
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.val}</td>
        </tr>
    );
}

const Section = () => {
    return <div><h1>statistics</h1></div>
}

/* using map as pre-processing before handing off an array to the jsx objects fo final value */
const Statistics = (props) =>{
    if(props.responseCounter===0){
        return (
        <div>
            <Section />
            <p>No feedback given</p>
        </div>
        )
    }
    return (
        <div>
            <Section />
            <table>
                <tbody>
                    <StatisticsLine text={Object.keys(props.results)[0]} val={props.results[Object.keys(props.results)[0]]["count"]}/>
                    <StatisticsLine text={Object.keys(props.results)[1]} val={props.results[Object.keys(props.results)[1]]["count"]}/>
                    <StatisticsLine text={Object.keys(props.results)[2]} val={props.results[Object.keys(props.results)[2]]["count"]}/>
                    <StatisticsLine text={"Total responses:"} val={Total(Object.values(props.results).map((res)=>(res["count"])))}/>
                    <StatisticsLine text={"Average response:"} val={Average(Object.values(props.results).map((res)=>(res["count"]*res["weight"])))}/>
                    <StatisticsLine text={"Percent positive:"} val={PctPos(Object.values(props.results).map((res)=>(res["weight"]>0 ? res["count"] : 0)))+"%"}/>
                </tbody>
            </table>
        </div>
    );
 }
 
 export default Statistics;