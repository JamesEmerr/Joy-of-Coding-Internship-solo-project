import { Table, TableBody, TableHeader } from '@radix-ui/themes'
import React from 'react'

const BoardMembers = () => {
  return (
    <><div className="flex justify-center mt-3">BoardMembers</div><ul>
      <Table.Root variant="surface">
      <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Position
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Contact
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <TableBody>         
            <Table.Row> 
              <Table.Cell className="hidden md:table-cell"> 
              James Merrill          
                 </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             President
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             jmerrill@mcx2020.org
              </Table.Cell>
            </Table.Row>        
            <Table.Row> 
              <Table.Cell className="hidden md:table-cell"> 
              Emily Hill        
                 </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             Vice President
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             ehill@mcx2020.org
              </Table.Cell>
            </Table.Row>   
            <Table.Row> 
              <Table.Cell className="hidden md:table-cell"> 
              Katrina Wright          
                 </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             CFO
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             kwright@mcx2020.org
              </Table.Cell>
            </Table.Row>   
            <Table.Row> 
              <Table.Cell className="hidden md:table-cell"> 
              Suxanne Atkins        
                 </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             CIO
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             satkins@mcx2020.org
              </Table.Cell>
              
            </Table.Row>    
            <Table.Row> 
              <Table.Cell className="hidden md:table-cell"> 
              Jeff Killian        
                 </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             Head Pooper Scooper
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
             jkillian2020@mcx.org
              </Table.Cell>
              
            </Table.Row>   
        </TableBody>    
        </Table.Root>      
    </ul>
    </>
    
  )
}

export default BoardMembers