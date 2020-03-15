
import Hello from '../components/Hello'
import Grid from '../page/grid/tabs'
import Chart from '../page/chart/Chart'
import Ui from '../components/Ui'
import Monitor from '../page/monitor/Monitor'
import Tree from '../components/Tree'
import Table from "../components/Table"



export default [
        {
            path: '/',
            name: 'home',
            component: Hello
        },
        {
            path: '/grid',
            name: 'grid',
            component: Grid
        },
        {
            path: '/mytable',
            name: 'mytable',
            component: Table
        },
        {
            path: '/chart',
            name: 'chart',
            component: Chart
        },
        {
            path: '/Ui',
            name: 'ui',
            component: Ui
        },
        {
            path: '/monitor',
            name: 'monitor',
            component: Monitor
        },
        {
            path: '/tree',
            name: 'tree',
            component: Tree
        }
    ]
