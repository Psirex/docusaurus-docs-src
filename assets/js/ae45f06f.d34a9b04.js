(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{81:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return s})),o.d(e,"metadata",(function(){return c})),o.d(e,"toc",(function(){return i})),o.d(e,"default",(function(){return p}));var r=o(3),a=o(7),n=(o(0),o(92)),s={},c={unversionedId:"contracts/lido",id:"contracts/lido",isDocsHomePage:!1,title:"Lido",description:"Lido is the core contract which acts as a liquid staking pool. The contract is responsible for Ether deposits and withdrawals, minting and burning liquid tokens, delegating funds to node operators, applying fees, and accepting updates from the oracle contract. Node Operators' logic is extracted to a separate contract, NodeOperatorsRegistry.",source:"@site/docs/contracts/lido.md",sourceDirName:"contracts",slug:"/contracts/lido",permalink:"/contracts/lido",editUrl:"https://github.com/Psirex/docusaurus-docs-src/edit/master/docs/docs/contracts/lido.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LidoOracle",permalink:"/contracts/lido-oracle"},next:{title:"NodeOperatorsRegistry",permalink:"/contracts/node-operators-registry"}},i=[],d={toc:i};function p(t){var e=t.components,o=Object(a.a)(t,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,o,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Lido is the core contract which acts as a liquid staking pool. The contract is responsible for Ether deposits and withdrawals, minting and burning liquid tokens, delegating funds to node operators, applying fees, and accepting updates from the oracle contract. Node Operators' logic is extracted to a separate contract, NodeOperatorsRegistry."),Object(n.b)("p",null,"Lido also acts as an ERC20 token which represents staked ether, stETH. Tokens are minted upon deposit and burned when redeemed. stETH tokens are pegged 1:1 to the Ethers that are held by Lido. stETH token\u2019s balances are updated when the oracle reports change in total stake every day."),Object(n.b)("p",null,"The source code can be found on ",Object(n.b)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/Lido.sol"},"Github here"),"."))}p.isMDXComponent=!0}}]);