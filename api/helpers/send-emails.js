const sgMail = require("@sendgrid/mail");

module.exports = {
  friendlyName: "Send Weekly Emails",

  description:
    "Send weekly sail emails to all users with their recommended items",

  inputs: {
    data: {
      description: "User ID (uid) & other data",
      type: "ref",
      required: true
    }
  },

  exits: {
    success: {
      responseType: ""
    },
    notFound: {
      description: "Was not able to generate",
      responseType: "notFound"
    }
  },

  fn: async function(inputs, exits) {
    sgMail.setApiKey(sails.config.sendgridAPIKey);

    let userInfo;
    let templateTitle;
    let items;
    const groupId = inputs.data.type === "weekly" ? 7985 : 7986;

    if (inputs.data.type === "weekly") {
      userInfo = await User.find({
        uid: inputs.data.uid
      }).populate("recommendedItems");
      items = userInfo[0].recommendedItems;
      templateTitle = "Your Weekly Deals";
    } else if (inputs.data.type === "cart") {
      userInfo = await User.find({
        uid: inputs.data.uid
      }).populate("saleItems");
      templateTitle = "Your Saved Items";
      items = userInfo[0].saleItems;
    }

    const msg = {
      to: userInfo[0].email,
      from: { email: "noreply@clipnsave.now.sh", name: "Clip 'N Save" },
      template_id: "d-422b3f341a01414999c245b35e4ee3e9",
      asm: {
        groupId: groupId
      },
      dynamic_template_data: {
        items: items,
        title: templateTitle
      }
    };
    sgMail.send(msg);

    return exits.success();
  }
};
