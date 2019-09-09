/*eslint-disable*/
import React from "react";
// @material-ui/core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// css
import 'antd/dist/antd.css';
import 'assets/css/menu.css';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import { makeStyles } from "@material-ui/core/styles";

// ant design
import { Table, Button, Col, Row } from "antd";
import { BASE_URL } from 'shared/constant/url';
import Search from "antd/lib/input/Search";

const useStyles = makeStyles(styles);

export default function Icons({...props}) {
  const classes = useStyles();

  const url = `${BASE_URL}/api/file?location=`;

  const columns = [
    { 
      title: 'Image', 
      key: 'file_location', 
      dataIndex: 'file_location',
      render(record) {
        return (
          <div>
            <img src={url+""+record} style={{height: '70px', width: "70px", boxShadow:'1px 1px 5px gray'}}/>
          </div>
        )
      }
    },
    { 
      title: 'Name', 
      key: 'name', 
      dataIndex: 'name',
      width: '30%'
    },
    { 
      title: 'Category', 
      key: 'category', 
      dataIndex: 'category'
    },
    { 
      title: 'Size', 
      key: 'size', 
      dataIndex: 'size'
    },
    { 
      title: 'Price', 
      key: 'price', 
      dataIndex: 'price'
    },
    { 
      title: '', 
      key: 'id', 
     render() {
       return (
         <div>
           <Button type="primary" style={{ margin: '0px 5px'}} icon="edit"/>
           <Button type="danger" icon="delete"/>
         </div>
       )
     }
    },
  ];
  
  return (
    <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Menu</h4>
                <p className={classes.cardCategoryWhite}>
                  All menu are listed here.
                </p>
              </CardHeader>
              <CardBody>
           
                <Row style={{margin: '10px 0px'}}>
                  <Col span={8}  style={{display: 'flex'}}>
                    <Search placeholder="Search Menu" />
                  </Col>
                  <Col span={8} offset={8} style={{ textAlign: 'right'}}>
                    <Button type="primary"> + Add Menu </Button>
                  </Col>
                </Row>

                <Table
                  size="small"
                  dataSource={props.data.data}
                  columns={columns}
                  expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    </div>
  );
}
