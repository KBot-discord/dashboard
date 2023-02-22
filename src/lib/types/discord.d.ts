import type { Guild } from '@buf/kbotdev_bot.bufbuild_es/bot/discord/guilds/v1/guilds_pb';

export interface IGuild {
	id: Guild['id'];
	name: Guild['name'];
	icon: Guild['icon'];
	owner: Guild['owner'];
}
