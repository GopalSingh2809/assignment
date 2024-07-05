import DepartmentList from "../components/DepartmentList"
import TableComponent from "../components/TableComponent"


const SecondPage = () => {
    
    return (
        <>
        <div style={{ height: 400, width: '100%' }}>
            <h1>Welcome to Second Page</h1>
            <div>
                <h3>Component 1</h3>
                <TableComponent/>
            </div>
            <div>
                <h3>Component 2</h3>
                <DepartmentList/>
            </div>
        </div>
        <div>

        </div>
        </>
    )
}

export default SecondPage
