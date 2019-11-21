import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-bottom: ${props =>
    props.type === props.tab ? 'solid 4px blue' : 'solid 4px grey'};
  a {
    font-size: 15px;
    text-decoration: none;
  }
`;

const TabBox = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: solid 1px grey;
`;

const AccessControl = ({ match }) => {
  const { tab } = match.params;
  return (
    <div>
      <TabBox>
        <Tab type="basic" tab={tab}>
          <Link to="/accessControl/basic">기본설정</Link>
        </Tab>
        <Tab type="advanced" tab={tab}>
          <Link to="/accessControl/advanced">고급설정</Link>
        </Tab>
      </TabBox>
      <div>
        <Switch>
          <Route path="/accessControl/" exact component={Basic} />
          <Route path="/accessControl/basic" component={Basic} />
          <Route path="/accessControl/advanced" component={Advanced} />
        </Switch>
      </div>
    </div>
  );
};

const Basic = () => <div>Basic Configuration</div>;
const Advanced = () => <div>Advanced Configuration</div>;

export default AccessControl;
