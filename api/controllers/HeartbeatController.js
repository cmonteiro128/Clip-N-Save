/**
 * HeartbeatController
 *
 * @description :: Heartbeat for monitoring
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  heartbeat: (req, res) => {
    return res.status(200).send("OK");
  },
};
