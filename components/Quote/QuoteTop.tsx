import { Checkbox, Divider, Flex, Grid, Input, Paper, Select, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';


export function QuoteTop() {

    return (
        <Paper shadow="xs" p="xl">
            <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <Input.Wrapper maw={400} w={'100%'}>
                    <Text size="lg" fw={700} mb={1}>Company (Customer)</Text>
                    <Text size="xs" c="dimmed" mb={10}>For existing companies search by name, email or company #</Text>
                    <Input leftSection={<IconSearch size={16} />} size="sm" />
                </Input.Wrapper>
            </Flex>
            <Grid mt={30} gutter="xl">
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper withBorder shadow="xs" p="lg">
                        <Text size="md" mb="lg" fw={700}>Bill to</Text>
                        <TextInput label="Company Name" mb={12} placeholder="Company Name" withAsterisk />
                        <TextInput label="Contact Name" mb={12} placeholder="Contact Name" withAsterisk />
                        <TextInput label="Address Line 1" mb={12} placeholder="Address Line 1" withAsterisk />
                        <TextInput label="Address Line 2" mb={12} placeholder="Address Line 2" />
                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput label="City" mb={12} placeholder="City" withAsterisk />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Select
                                    label="State"
                                    placeholder="Pick value"
                                    data={['New Jersey', 'New York', 'California', 'Vermont']}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput label="Postal/Zip Code" mb={12} placeholder="Postal/Zip Code" withAsterisk />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Select
                                    label="Country"
                                    data={['United States', 'New Jersey', 'New York', 'California', 'Vermont']}
                                    defaultValue="United States"
                                />
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper withBorder shadow="xs" p="lg">
                        <Flex
                            mb="lg"
                            gap="xl"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Text size="md" fw={700}>Ship to</Text>
                            <Checkbox
                                label="Same as Bill To"
                            />
                        </Flex>
                        <TextInput label="Company Name" mb={12} placeholder="Company Name" withAsterisk />
                        <TextInput label="Contact Name" mb={12} placeholder="Contact Name" withAsterisk />
                        <TextInput label="Address Line 1" mb={12} placeholder="Address Line 1" withAsterisk />
                        <TextInput label="Address Line 2" mb={12} placeholder="Address Line 2" />
                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput label="City" mb={12} placeholder="City" withAsterisk />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Select
                                    label="State"
                                    placeholder="Pick value"
                                    data={['New Jersey', 'New York', 'California', 'Vermont']}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput label="Postal/Zip Code" mb={12} placeholder="Postal/Zip Code" withAsterisk />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Select
                                    label="Country"
                                    data={['United States', 'New Jersey', 'New York', 'California', 'Vermont']}
                                    defaultValue="United States"
                                />
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Paper>
    );
}