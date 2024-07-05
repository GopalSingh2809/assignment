import React, { useState } from 'react';

// Define the type for the department data
interface DepartmentData {
  department: string;
  sub_departments: string[];
}

// Hardcoded JSON data
const departmentData: DepartmentData[] = [
  {
    department: 'Customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'Design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (department: string) => {
    setExpanded((prev) => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const toggleSelect = (key: string, isDepartment: boolean) => {
    setSelected((prev) => {
      const newSelected = { ...prev, [key]: !prev[key] };
      if (isDepartment) {
        const department = departmentData.find((dept) => dept.department === key);
        if (department) {
          department.sub_departments.forEach((subDept) => {
            newSelected[subDept] = newSelected[key];
          });
        }
      } else {
        const department = departmentData.find((dept) =>
          dept.sub_departments.includes(key)
        );
        if (department) {
          const allSelected = department.sub_departments.every((subDept) => newSelected[subDept]);
          newSelected[department.department] = allSelected;
        }
      }
      return newSelected;
    });
  };

  return (
    <div style={{
        height:"300px",
        padding:"20px 30px",
        backgroundColor:"#E7F0DC",
        fontSize:"20px",
        borderRadius:"10px"
        }}>
      {departmentData.map((dept) => (
        <div key={dept.department}>
          <div
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <span style={{ marginRight: '8px' }} onClick={() => toggleExpand(dept.department)}>
              {expanded[dept.department] ? '-' : '+'}
            </span>
            <input
              type="checkbox"
              checked={!!selected[dept.department]}
              onChange={() => toggleSelect(dept.department, true)}
            />
            <span>{dept.department}</span>
          </div>
          {expanded[dept.department] && (
            <ul>
              {dept.sub_departments.map((subDept) => (
                <li key={subDept} style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={!!selected[subDept]}
                    onChange={() => toggleSelect(subDept, false)}
                  />
                  <span>{subDept}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
