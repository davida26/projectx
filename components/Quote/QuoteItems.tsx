import { Button, Image, Flex, Grid, Input, NumberInput, Paper, Select, Text, TextInput, Stack } from '@mantine/core';
import {
    IconSearch, IconCurrencyDollar, IconPercentage
} from '@tabler/icons-react';


export function QuoteItems() {

    return (
        <Paper shadow="xs" p="xl" mt="lg">

            <Text size="lg" fw={700} mb={1}>Products (Services)</Text>
            <Text size="xs" c="dimmed" mb={10}>Search for existing products or create new.</Text>


            <Flex
                gap="sm"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
                mb="xl"
            >
                <Input miw={350} leftSection={<IconSearch size={16} />} size="sm" />
                <Flex
                    gap="sm"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <NumberInput defaultValue={'1'} maw={100} placeholder="Quantity" />
                    <Button disabled>Add Product</Button>
                    <Button variant="outline">Create New</Button>
                </Flex>
            </Flex>
            <Paper withBorder shadow="xs" p="lg" mb='md'>
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Image
                        radius="md"
                        h={75}
                        miw={75}
                        fit="contain"
                        src="data:image/jpeg;base64,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"
                    />
                    <Stack gap="0">
                        <Text size="md" fw={700}>Musiclily Pro Guitar Effects Pedal</Text>
                        <Text size="xs" c="dimmed">DC 9V Adapter Powered for Electric Guitar Bass True Bypass, Super Chorus</Text>
                    </Stack>
                    <NumberInput defaultValue={'1'} maw={100} description="Quantity" />
                    <Stack ml="xs" gap='0'>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                            mb="7">
                            <Text miw={25} size="xs" c="dimmed">List</Text>
                            <Input value="1199.99" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                            mb="7">
                            <Text miw={25} size="xs" c="dimmed">Sale</Text>
                            <Input value="899.25" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap">
                            <Text miw={25} size="xs" c="dimmed">Cost</Text>
                            <Input value="499.00" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                    </Stack>
                    <Stack ml="xs" gap='0'>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Select
                                defaultValue="Discount"
                                maw={125}
                                data={['Discount', 'Margin', 'Markup']}
                            />
                            <Select
                                defaultValue="%"
                                maw={65}
                                data={['%', '$']}
                            />
                        </Flex>
                        <Input mt={10} value="10" placeholder="List Price" leftSection={<IconPercentage
                            size={16} />} />
                    </Stack>
                </Flex>
            </Paper>
            <Paper withBorder shadow="xs" p="lg" mb='md'>
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Image
                        radius="md"
                        h={75}
                        miw={75}
                        fit="contain"
                        src="https://media.sweetwater.com/m/products/image/9f9a980a33zK3tiNiadpU3zH6sHV6ZCWKTzSkxC2.jpg?quality=82&height=750&ha=9f9a980a33a6fb31"
                    />
                    <Stack gap="0">
                        <Text size="md" fw={700}>Musiclily Pro Guitar Effects Pedal</Text>
                        <Text size="xs" c="dimmed">DC 9V Adapter Powered for Electric Guitar Bass True Bypass, Super Chorus</Text>
                    </Stack>
                    <NumberInput defaultValue={'1'} maw={100} description="Quantity" />
                    <Stack ml="xs" gap='0'>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                            mb="7">
                            <Text miw={25} size="xs" c="dimmed">List</Text>
                            <Input value="1199.99" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                            mb="7">
                            <Text miw={25} size="xs" c="dimmed">Sale</Text>
                            <Input value="899.25" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap">
                            <Text miw={25} size="xs" c="dimmed">Cost</Text>
                            <Input value="499.00" size="xs" placeholder="List Price" leftSection={<IconCurrencyDollar size={16} />} />
                        </Flex>
                    </Stack>
                    <Stack ml="xs" gap='0'>
                        <Flex
                            gap="xs"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Select
                                defaultValue="Discount"
                                maw={125}
                                data={['Discount', 'Margin', 'Markup']}
                            />
                            <Select
                                defaultValue="%"
                                maw={65}
                                data={['%', '$']}
                            />
                        </Flex>
                        <Input mt={10} value="10" placeholder="List Price" leftSection={<IconPercentage
                            size={16} />} />
                    </Stack>
                </Flex>
            </Paper>




        </Paper>
    );
}