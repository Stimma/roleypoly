module.exports = (R, $) => {
  R.get('/api/servers', async (ctx) => {
    const { userId } = ctx.session
    const srv = $.discord.getRelevantServers(userId)
    ctx.body = $.discord.presentableServers(srv, userId)
  })

  R.get('/api/server/:id', async (ctx) => {
    const { userId } = ctx.session
    const { id } = ctx.params

    const srv = $.discord.client.guilds.get(id)

    if (srv == null) {
      ctx.body = { err: 'not found' }
      ctx.status = 404
      return
    }

    const gm = srv.members.get(userId)
    const roles = $.discord.presentableRoles(id, gm)

    ctx.body = roles
  })
}
