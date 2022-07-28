import { Container, Grid, Header, Statistic, Segment, Icon, Form, Button} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
   <Container>

   <Header as='h1'>Budget</Header>

    <Statistic size='small'>
      <Statistic.Label>Balance:</Statistic.Label>
      <Statistic.Value>$2,233,123.33</Statistic.Value>
    </Statistic>

    <Segment textAlign='center'>
    <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
      <Statistic size="tiny" color="green">
        <Statistic.Label style={{textAlign:"left"}}>
          Income:
        </Statistic.Label>
        <Statistic.Value>
        333.23
        </Statistic.Value>
      </Statistic>
      </Grid.Column>
      <Grid.Column>
      <Statistic size="tiny" color="red">
        <Statistic.Label style={{textAlign:"left"}}>
          Expenses:
        </Statistic.Label>
         <Statistic.Value>
        221.99
        </Statistic.Value>
      </Statistic></Grid.Column>
    </Grid.Row>
    </Grid>
    </Segment>

    <Header as='h3'>
      History
    </Header>

    <Segment color='red'>
      <Grid columns={3} textAlign='right'>
        <Grid.Column width={10} textAlign="left">Something</Grid.Column>
        <Grid.Column width={3} textAlign="right">$432</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered />
          <Icon name="trash" bordered/>
        ></Grid.Column>
        </Grid>
    </Segment>


    <Segment color='red'>
      <Grid columns={3} textAlign='right'>
        <Grid.Column width={10} textAlign="left">Nothing</Grid.Column>
        <Grid.Column width={3} textAlign="right">$234</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered />
          <Icon name="trash" bordered/>
        ></Grid.Column>
        </Grid>
    </Segment>


    <Segment color='red'>
      <Grid columns={3} textAlign='right'>
        <Grid.Column width={10} textAlign="left">Anything</Grid.Column>
        <Grid.Column width={3} textAlign="right">$342</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered />
          <Icon name="trash" bordered/>
        ></Grid.Column>
        </Grid>
    </Segment>

   <Header as='h3'>Add New Transaction</Header>
   <Form unstackable>
    <Form.Group>
      <Form.Input 
        icon='tags' 
        width={12} 
        label="Description"
        placeholder='New shiny thing.' />
      <Form.Input width={4} label='value' placeholder='100.00' icon='dollar'  iconPosition='left' />

    </Form.Group>

    <Button.Group style={{marginTop:20}}>
    <Button>Cancel</Button>
    <Button.Or />
     <Button primary>Ok</Button>
    </Button.Group>
   </Form>

   </Container>
  );
}

export default App;
