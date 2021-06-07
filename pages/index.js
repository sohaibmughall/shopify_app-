import {
  Layout,
  EmptyState,
  Page,
  TextStyle,
  Card,
  DataTable,
} from "@shopify/polaris";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import React from "react";
import axios from "axios";


class Index extends React.Component {
  state = { open: false, access_token: "", new: [] };

  componentDidMount() {
    const { shopOrigin } = this.props;
   

    // var config = {
    //   method: "get",
    //   url:
    //     "https://test-stores-online.myshopify.com/admin/api/2021-01/orders.json",
    //   headers: {
    //     "Connection":"keep-alive",
    //     "X-Shopify-Access-Token": "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",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
  };
  render() {
    const rows = [
      ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
      ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
      [
        "Navy Merino Wool Blazer with khaki chinos and yellow belt",
        "$445.00",
        124518,
        32,
        "$14,240.00",
      ],
    ];
    
    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: "Select products",
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <Page title="Sales by product">
            <Card>
              <DataTable
                columnContentTypes={[
                  "text",
                  "numeric",
                  "numeric",
                  "numeric",
                  "numeric",
                ]}
                headings={[
                  "Product",
                  "Price",
                  "SKU Number",
                  "Net quantity",
                  "Net sales",
                ]}
                rows={rows}
                totals={["", "", "", 255, "$155,830.00"]}
              />
            </Card>
          </Page>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
